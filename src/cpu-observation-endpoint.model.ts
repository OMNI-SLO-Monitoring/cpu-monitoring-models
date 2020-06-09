import { v4 as uuid } from 'uuid';

export default class CpuObservationEndpoint {
    id: string;
    name: string;
    cpuUtilQueryEndpoint: string;
    criticalCpuUtilThreshold: number;
    cpuObservationFrequencyMilis: number;

    constructor(
        name: string,
        cpuUtilQueryEndpoint: string,
        criticalCpuUtilThreshold: number,
        cpuObservationFrequencyMilis: number,
    ) {
        this.id = uuid();
        this.name = name;
        this.cpuUtilQueryEndpoint = cpuUtilQueryEndpoint;
        this.criticalCpuUtilThreshold = criticalCpuUtilThreshold;
        this.cpuObservationFrequencyMilis = cpuObservationFrequencyMilis;
    }
}