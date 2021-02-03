export const currentPriceQuery = `{
  viewer {
    homes {
      currentSubscription {
        priceInfo {
          current {
            total
            energy
            tax
            level
          }
        }
      }
    }
  }
}`;
