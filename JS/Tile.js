class Tile
{
    constructor(name)
    {
        this.blockNumber;
        this.type = name;
        console.log(name);
    }
    printName() 
    {
        console.log(name);
        if(name = "human")
        {
            console.log("Changing photos");
            var image = document.getElementById('block1');
            console.log("Photo Location found");
            image.src = "block1.png"
        }
    }
}