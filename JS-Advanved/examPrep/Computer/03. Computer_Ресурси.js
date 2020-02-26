class Computer {

    constructor(ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = ramMemory;
        this.cpuGHz = cpuGHz;
        this.hddMemory = hddMemory;
        this.taskManager = [];
        this.installedPrograms = [];
    }

    installAProgram(name, requiredSpace) {

        if (this.hddMemory - requiredSpace < 0) {
            throw new Error('There is not enough space on the hard drive');
        }

        this.hddMemory -= requiredSpace;

        let program = {
            name,
            requiredSpace
        }

        this.installedPrograms.push(program);

        return program;
    }

    uninstallAProgram(name) {

        let index = this.installedPrograms.findIndex(p => p.name === name);

        if (index === -1) {
            throw new Error('Control panel is not responding')
        }

        this.hddMemory += this.installedPrograms[index].requiredSpace;
        this.installedPrograms.splice(index, 1);

        return this.installedPrograms;
    }

    openAProgram(name) {

        let program = this.installedPrograms.find(p => p.name === name);

        if (!program) {
            throw new Error(`The ${name} is not recognized`)
        }

        if (this.taskManager.findIndex(p => p.name === name) != -1) {
            throw new Error(`The ${name} is already open`)
        }

        let ramUsage = (program.requiredSpace / this.ramMemory) * 1.5;
        let cpuUsage = ((program.requiredSpace / this.cpuGHz) / 500) * 1.5;

        let totalRamUsage = ramUsage + this.taskManager.reduce((acc, x) => acc += x.ramUsage, 0);
        let totalCpuUsage = cpuUsage + this.taskManager.reduce((acc, x) => acc += x.cpuUsage, 0)


        if ((totalRamUsage >= 100 && totalCpuUsage >= 100) || totalRamUsage >= 100) {
            throw new Error(`${name} caused out of memory exception`)
        }

        if (totalCpuUsage >= 100) {
            throw new Error(`${name} caused out of cpu exception`)
        }

        let openedProgram = {
            name,
            ramUsage,
            cpuUsage
        }

        this.taskManager.push(openedProgram);

        return openedProgram;
    }

    taskManagerView() {

        let result;

        if (this.taskManager.length === 0) {
            result = 'All running smooth so far';
        } else {

            result = this.taskManager
                .map(p => `Name - ${p.name} | Usage - CPU: ${Number(p.cpuUsage).toFixed(0)}%, RAM: ${Number(p.ramUsage).toFixed(0)}%`)
                .join('\n')
        }

        return result;
    }
}