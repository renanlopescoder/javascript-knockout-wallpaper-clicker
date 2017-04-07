let initialWallpapersData = [
	{
		clickCount : 0,
		name : "Avangers",
		imgSrc : "img/wallpaper.jpeg",
		imgAttribution : "newborn",
		nicknames : [
			{
					nickname : "Marvel",
					type : "Team"
			},
			{
					nickname : "Avangers",
					type : "Awesome"
			}
		]
	},
		{
		clickCount : 0,
		name : "Batman",
		imgSrc : "img/wallpaper2.jpg",
		imgAttribution : "newborn",
		nicknames : [
			{
					nickname : "Batman Wallpaper",
					type : "Vilain"
			},
			{
					nickname : "Tess",
					type : "Red"
			}
		]
	},
		{
		clickCount : 0,
		name : "Civil War",
		imgSrc : "img/wallpaper4.jpg",
		imgAttribution : "newborn",
		nicknames : [
			{
					nickname : "Captain",
					type : "Team Blue"
			},
			{
					nickname : "Stark",
					type : "Team Red"
			}
		]
	}
]
function AppViewModel() {
    this.wallpaperList = ko.observableArray([]);

		initialWallpapersData.forEach(
			(wallpaperItem) => {
				this.wallpaperList.push( new Wallpaper(wallpaperItem));
			}
		);

		this.currentWallpaper = ko.observable(this.wallpaperList()[0]);
		
    this.incrementCounter = () => {
        this.currentWallpaper().clickCount(this.currentWallpaper().clickCount() + 1);
        if (this.currentWallpaper().clickCount() >= 10){
            this.currentWallpaper().imgAttribution('Awesome Heroes');
        }
    };

		this.setWallpaper  = (clickedWallpaper) => {
			this.currentWallpaper(clickedWallpaper);
		}

}

// Activates knockout.js
ko.applyBindings(new AppViewModel());