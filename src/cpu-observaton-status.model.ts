/**
 * Used to send a status of a CpuObservationEndpoint to the frontend
 */
export default class CpuObservationStatus {
    /** id of CpuObservationEndpoint */
    observationEndpointid: string;
    /** cpu utiliation value */
    cpuLoad: number;
    /** massage to show in frontend */
    message: string;

    constructor(id: string) {
        this.observationEndpointid = id;
    }
}