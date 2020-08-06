import { v4 as uuid } from 'uuid';

/**
 * Contains information about services of which the cpu utilization should be monitored
 * Used in monitor-frontend and monitoring-cpu-usage.
 */
export default class CpuObservationEndpoint {

    /** unique identify for a CpuObservationEndpoint */
    id: string;

    constructor(
        /** Display name for this service */
        public name: string,
        /** Endpoint of service */
        public cpuUtilQueryEndpoint: string,
        /** a value that the cpu utilization should not exceed */
        public criticalCpuUtilThreshold: number,
        /** a value that the cpu utilization should always be above */
        public minimalCpuUtilThreshold: number,
        /** the frequency of which the oberserver should check the conditions */
        public cpuObservationFrequencyMilis: number,
    ) {
        // generates a unique identifier with the uuid pacakge
        this.id = uuid();
    }
}