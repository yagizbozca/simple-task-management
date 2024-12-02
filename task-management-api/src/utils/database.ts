import pg from "pg";
import config from "../config/envConfig";


const pool = new pg.Pool({
    connectionString: config.DATABASE_URL 
});

export const query = async (text: string, params?: any[]) => {
    const client = await pool.connect();
    try {
        const result = await client.query(text, params);
        return result.rows;
    } finally {
        client.release();
    }
};
