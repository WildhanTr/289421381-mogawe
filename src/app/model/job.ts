export class Job {
    uuid: string;
    uuidJobType: string;
    jobTypeName: string;
    uuidJobClass?: any;
    jobClassName?: any;
    uuidBatch: string;
    batchName: string;
    idPeriod: string;
    uuidProject: string;
    uuidLocation: string;
    locationName: string;
    latitude: number;
    longitude: number;
    city?: any;
    jobId: any;
    name: string;
    code?: any;
    description: string;
    howTo?: any;
    tutorial?: any;
    minimumLevel: number;
    target: number;
    fee: number;
    points: number;
    duration: string;
    status: string;
    schedule?: any;
    isPublished: boolean;
    isFeatured: boolean;
    isQcNeeded: boolean;
    isAutoApproved: boolean;
    jobPicture?: any;
    jobBanner?: any;
    jobColor?: any;
    jobTextColor?: any;
    jobTags: [{name: 'Angular'}];
    tags?: any;
    additionalInfo: string;
    defaultLimit: number;
    defaultExpired: number;
    isDirect: boolean;
    jobLimit?: any;
    type?: any;
    radius: number;
    defaulLimit?: any;
    assigned: number;
    applied: number;
    participants: number;
    resultCount: number;
    icon?: any;
    jobActions?: any;
    active: boolean;
    paymentUnitCode: string;
    updateType: string;
    selected: string;
    startDate: string
    endDate: string
}