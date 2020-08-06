export default class CpuObservationEndpoint {
    name: string;
    cpuUtilQueryEndpoint: string;
    criticalCpuUtilThreshold: number;
    minimalCpuUtilThreshold: number;
    cpuObservationFrequencyMilis: number;
    id: string;
    constructor(name: string, cpuUtilQueryEndpoint: string, criticalCpuUtilThreshold: number, minimalCpuUtilThreshold: number, cpuObservationFrequencyMilis: number);
}
