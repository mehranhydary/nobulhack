App = {
    web3Provider: null,
    contracts: {},
    account: '0x0',
    loading: false,
    coinPrice: 1000000000000000,
    coinsSold: 0,
    coinsAvailable: 750000,
    init: () => {
        console.log('Application initialized')
        return App.initWeb3();
    },
    initWeb3: () => {
        if(typeof web3 !== 'undefined') {
            App.web3Provider = web3.currentProvider;
            web3 = new Web3(web3.currentProvider);
        } else {
            App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
            web3 = new Web3(App.web3Provider);
        }
        return App.initContracts();
    },
    initContracts: () => {
        $.getJSON("NobulCoinSale.json", (nobulCoinSale) => {
            App.contracts.NobulCoinSale = TruffleContract(nobulCoinSale);
            App.contracts.NobulCoinSale.setProvider(App.web3Provider);
            App.contracts.NobulCoinSale.deployed().then(function(nobulCoinSale) {
              console.log("Nobul Coin Sale Address:", nobulCoinSale.address);
            });            
        }).done(function() {
            $.getJSON("NobulCoin.json", (nobulCoin) => {
              App.contracts.NobulCoin = TruffleContract(nobulCoin);
              App.contracts.NobulCoin.setProvider(App.web3Provider);
              App.contracts.NobulCoin.deployed().then(function(nobulCoin) {
                console.log("Nobul Coin Address:", nobulCoin.address);
              });
      
              App.listenForEvents();
              return App.render();
            });
          })
    },
    listenForEvents: () => {
        App.contracts.NobulCoinSale.deployed().then(instance => {
            instance.Sell({}, {
                fromBlock: 0,
                toBlock: 'latest'
            }).watch((error, event) => {
                console.log('Event triggered', event);
                App.render();
            })
        })
    },
    render: () => {
        if(App.loading){
            console.log('1')
            return;
        }
        console.log('2')
        App.loading = true;
        var loader = $('#loader');
        var content = $('#content');
        
        loader.show();
        content.hide();
        web3.eth.getCoinbase((err, account) => {
            console.log('3')
            if(err === null){
                App.account = account;
                $('#accountAddress').html('Your account: ' + account);
            }
            console.log('4')
        })
        
        App.contracts.NobulCoinSale.deployed().then(instance => {
            coinSaleInstance = instance;
            return coinSaleInstance.coinPrice();
        }).then(coinPrice => {
            App.coinPrice = coinPrice;
            $('.coin-price').html(web3.fromWei(App.coinPrice, 'ether').toNumber());
            return coinSaleInstance.coinsSold();
        }).then(coinsSold => {
            App.coinsSold = coinsSold.toNumber();
            $('.coins-sold').html(App.coinsSold);
            $('.coins-available').html(App.coinsAvailable);
            var progressPercent = (Math.ceil(App.coinsSold) / App.coinsAvailable) * 100;
            $('progress').html(progressPercent);

            App.contracts.NobulCoin.deployed().then(instance => {
                coinInstance = instance;
                return coinInstance.balanceOf(App.account);
            }).then(balance => {
                $('.coin-balance').html(balance.toNumber());
                App.loading = false;
                loader.hide();
                content.show();
                
            })
        })
    },
    buyCoins: () => {
        $('#content').hide();
        $('#loader').show();
        var numberOfCoins = $('#numberOfCoins').val();
        console.log(1, numberOfCoins)
        App.contracts.NobulCoinSale.deployed().then(instance => {
            console.log(2, numberOfCoins)
            return instance.buyCoins(numberOfCoins, {
                from: App.account,
                value: numberOfCoins * App.coinPrice,
                gas: 500000
            });
        }).then(result => {
            console.log('Coins are purchased...')
            $('form').trigger('reset')
            // $('#loader').hide();
            // $('#content').show();
            // Waiting for sell event to trigger an event.
        });
    }
}
$(() => {
    $(window).load(()=>{
        App.init();
    })
})