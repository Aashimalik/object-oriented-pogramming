function StopWatch(){
    let startTime,endTime,running,duration = 0;

    this.start = function(){
        if(running) throw new Error('Stopwatch has already started');
        running = true;
        startTime = new Date();
    };

    this.stop = function(){
        if(!running) throw new Error('Stopwatch is not started');
        running = false;
        endTime = new Date();
        const seconds = (endTime.getTime()-startTime.getTime())/1000;
        duration=+seconds;
    };

    this.reset = function(){
        duration = 0;
        endTime = null;
        startTime = null;
        running = false;
    };

    Object.defineProperty(this,'duration',{
        get:function(){
            return duration;
        }
    })
}