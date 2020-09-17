/**
 * Format definition of what the current status of an observed CPU endpoint is
 */
export default class CpuObservationStatus {
    observationEndpointid: string;
    cpuLoad: number;
    message: string;

    constructor(id: string) {
        this.observationEndpointid = id;
    }
}