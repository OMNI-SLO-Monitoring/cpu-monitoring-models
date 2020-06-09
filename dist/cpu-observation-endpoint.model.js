"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CpuObservationEndpoint {
    constructor(id, name, cpuUtilQueryEndpoint, criticalCpuUtilThreshold, cpuObservationFrequencyMilis) {
        this.id = id;
        this.name = name;
        this.cpuUtilQueryEndpoint = cpuUtilQueryEndpoint;
        this.criticalCpuUtilThreshold = criticalCpuUtilThreshold;
        this.cpuObservationFrequencyMilis = cpuObservationFrequencyMilis;
    }
}
exports.default = CpuObservationEndpoint;
//# sourceMappingURL=cpu-observation-endpoint.model.js.map