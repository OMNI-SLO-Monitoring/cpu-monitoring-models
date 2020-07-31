"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class CpuObservationEndpoint {
    constructor(name, cpuUtilQueryEndpoint, criticalCpuUtilThreshold, minimalCpuUtilThreshold, cpuObservationFrequencyMilis) {
        this.name = name;
        this.cpuUtilQueryEndpoint = cpuUtilQueryEndpoint;
        this.criticalCpuUtilThreshold = criticalCpuUtilThreshold;
        this.minimalCpuUtilThreshold = minimalCpuUtilThreshold;
        this.cpuObservationFrequencyMilis = cpuObservationFrequencyMilis;
        this.id = uuid_1.v4();
    }
}
exports.default = CpuObservationEndpoint;
//# sourceMappingURL=cpu-observation-endpoint.model.js.map