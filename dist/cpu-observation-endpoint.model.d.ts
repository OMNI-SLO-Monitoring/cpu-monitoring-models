export default class CpuObservationEndpoint {
    id: string;
    name: string;
    cpuUtilQueryEndpoint: string;
    criticalCpuUtilThreshold: number;
    cpuObservationFrequencyMilis: number;
    constructor(name: string, cpuUtilQueryEndpoint: string, criticalCpuUtilThreshold: number, cpuObservationFrequencyMilis: number);
}
