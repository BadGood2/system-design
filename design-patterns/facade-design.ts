class Fan{
    on(){
        console.log(' FAN ON');
        
    }
    off(){
        console.log('FAN OFF');
        
    }
}

class Light{
    on(){
        console.log('LIGHT ON');
        
    }
    off(){
        console.log('NO LIGHT');
        
    }
}

class HomeAutomation{
    fan: Fan;
    light: Light
    constructor(){
        this.fan = new Fan()
        this.light = new Light()
    }

    morningRoutine(){
        this.fan.on()
        this.light.on()
    }

    nightRoutine(){
        this.fan.off()
        this.light.off()
    }
}

const home = new HomeAutomation()
home.morningRoutine()