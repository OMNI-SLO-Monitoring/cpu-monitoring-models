export default class CpuObservationStatus {
    observationEndpointid: string;
    cpuLoad: number;
    message: string;

    constructor(id: string) {
        this.observationEndpointid = id;
    }
}