import { v4 as uuid } from 'uuid';

export default class CpuObservationEndpoint {
    id: string;

    constructor(
        public name: string,
        public cpuUtilQueryEndpoint: string,
        public criticalCpuUtilThreshold: number,
        public minimalCpuUtilThreshold: number,
        public cpuObservationFrequencyMilis: number,
    ) {
        // generates a unique identifier with the uuid pacakge
        this.id = uuid();
    }
}