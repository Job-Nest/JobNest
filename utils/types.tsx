export interface Job {
    _id: number;
    date: Date;
    title: string;
    company_name: string;
    app_status: string;
    last_action: string;
    source: string;
    app_url: string;
    timestamps: boolean;
}