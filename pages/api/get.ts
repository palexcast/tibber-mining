import {NextApiRequest, NextApiResponse} from "next";
import {default as getTibberService} from "../../node-services/tibber.service";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const tibberService = getTibberService();
    try {
        const data = await tibberService.currentPrice();
        res.statusCode = 200
        res.json(data);
    } catch (err) {
        if (err.errno === -2) {
            res.statusCode = 404;
            res.json({error: 'No data synced'})
            return;
        }
        res.statusCode = 500;
        throw new Error(JSON.stringify(err));
    }
}
