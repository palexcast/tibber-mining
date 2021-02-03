import {IConfig, TibberQuery} from "tibber-api";
import {Environment} from "../models/environment";
import {currentPriceQuery} from "../utils/tibber-queries";

export type TibberService = {
    currentPrice(): any;
}

class TibberServiceImpl implements TibberService {
    private readonly tibberQuery: TibberQuery;

    constructor(
        private config: IConfig,
    ) {
        this.tibberQuery = new TibberQuery(config);
    }

    currentPrice(): any {
        return this.tibberQuery.query(currentPriceQuery, );
    }
}

let instance: TibberService;

const initInstance = (): TibberService => {
    if (instance) {
        return instance;
    }

    const config: IConfig = {
        apiEndpoint: {
            apiKey: Environment().TIBBER_API_KEY,
            queryUrl: Environment().TIBBER_GQL_URL,
            feedUrl: Environment().TIBBER_FEED_URL
        },
        active: true
    }
    instance = new TibberServiceImpl(config)
    return instance;
}
export default initInstance;
