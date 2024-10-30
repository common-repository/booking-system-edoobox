export {};

declare global {
    interface Window {
        googleMapsApiKey: Array<string> | undefined;
        googlemapstyle: any;
        initialiseGoogleMaps: Function;
        jQuery: Function;
        placeholderImageURL: any;
        placeholderImages: any;
    }
}