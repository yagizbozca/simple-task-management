export interface Config {
    app: {
        port: number | string;
        name: string;
    };
    db: {
        host: string;
        port: number | string;
        name: string;
    };
}

export default config: Config = {
    app: {
        port: 3000,
        name: "TaskManagementNodeAPI"
    },
    db: {
        host: "localhost",
        port: 5432,
        name: "taskdb"
    }
};
