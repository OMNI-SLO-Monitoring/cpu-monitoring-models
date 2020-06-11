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
        // generates a unique identifier with the uuid pacakge
        this.id = uuid();
        this.name = name;
        this.cpuUtilQueryEndpoint = cpuUtilQueryEndpoint;
        this.criticalCpuUtilThreshold = criticalCpuUtilThreshold;
        this.cpuObservationFrequencyMilis = cpuObservationFrequencyMilis;
    }
}