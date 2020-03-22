(function() {

    var data = [
        {
            name: 'Settings Sync',
            description: 'The Settings Sync extension synchronizes settings, snippets, themes, keybindings, workspaces, extensions, and more across multiple machines.',
            author: 'Shan Khan',
            url: 'https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync&_ga=2.110126669.978018412.1584753847-1976103813.1584753847',
            downloads: 1494892,
            stars: 4.6,
            price: 0.00,
            selector: 'p1',
        },
        {
            name: 'Trailing Spaces',
            description: 'Highlight trailing spaces and delete them in a flash!',
            author: 'Shardul Mahadik',
            url: 'https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces&_ga=2.114917711.978018412.1584753847-1976103813.1584753847',
            downloads: 342735,
            stars: 4.8,
            price: 0.00,
            selector: 'p2',
        },
        {
            name: 'GitLens',
            description: 'Supercharge the Git capabilities built into Visual Studio Code — Visualize code authorship at a glance via Git blame annotations and code lens, seamlessly navigate and explore Git repositories, gain valuable insights via powerful comparison commands, and so much more.',
            author: 'Eric Amodio',
            url: 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens&_ga=2.22047219.978018412.1584753847-1976103813.1584753847',
            downloads: 1494892,
            stars: 4.6,
            price: 0.00,
            selector: 'p3',
        }
    ];

    function Package(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;

        this.getFormattedDownloads = function () {
            return this.downloads.toLocaleString();
        };

        this.getFormattedStars = function () {
            return this.stars.toLocaleString();
        };
    }

    var getTodaysDate = function() {
        var today = new Date();
        return today.toDateString();
    };

    var getEl = function (id) {
        return document.getElementById(id);
    }

    var writePackageInfo = function(package) {
        var selector = package.selector,
        nameEl = getEl(selector + '-name'),
        descEl = getEl(selector + '-description'),
        authEl = getEl(selector + '-author'),
        downloadEl = getEl(selector + '-downloads'),
        starsEl = getEl(selector + '-stars');

        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        downloadEl.textContent = package.getFormattedDownloads();
        starsEl.textContent = package.getFormattedStars();
    }

    dateEl = getEl('date');
    dateEl.textContent = getTodaysDate()

    //var sync = new Package(data[0]);
    //writePackageInfo(sync);
    for (var i = 0; i < data.length; i++) {
        writePackageInfo(new Package(data[i]));
    }
}());