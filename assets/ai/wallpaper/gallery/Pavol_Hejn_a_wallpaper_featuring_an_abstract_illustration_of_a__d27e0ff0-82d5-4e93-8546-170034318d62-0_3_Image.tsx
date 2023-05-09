/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import Image from 'next/image';
import { Color } from '../../../../src/utils/color/Color';
import { IImageColorStats } from '../../../../src/utils/image/utils/IImageColorStats';
import { IWallpaperMetadata, IWallpaperComponentProps } from '../IWallpaperComponent';
import metadata from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__d27e0ff0-82d5-4e93-8546-170034318d62-0_3.json';
import source from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__d27e0ff0-82d5-4e93-8546-170034318d62-0_3.png';

/**
 * Image of A wallpaper featuring an abstract illustration of a futuristic data center, with sleek and modern graphics and a minimalist color scheme.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAnAbstractIllustrationOfAD27e0ff082d54e938546170034318d620_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring an abstract illustration of a futuristic data center, with sleek and modern graphics and a minimalist color scheme."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingAnAbstractIllustrationOfAD27e0ff082d54e938546170034318d620_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAnAbstractIllustrationOfAD27e0ff082d54e938546170034318d620_3_Image.colorStats = {
    averageColor: Color.fromHex('#204c6c'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#775588'), Color.fromHex('#77ffff')],
    minmaxGreen: [Color.fromHex('#229999'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#115599'), Color.fromHex('#ffffee')],
    mostFrequentColor: Color.fromHex('#112244'),
    mostSaturatedColor: Color.fromHex('#002244'),
    mostGroupedColor: Color.fromHex('#001133'),
    bottom: {
        averageColor: Color.fromHex('#183d5f'),
        lightestColor: Color.fromHex('#cceeff'),
        darkestColor: Color.fromHex('#001122'),
        minmaxWhite: [Color.fromHex('#ccffff'), Color.fromHex('#001122')],
        minmaxRed: [Color.fromHex('#333355'), Color.fromHex('#77ffff')],
        minmaxGreen: [Color.fromHex('#228899'), Color.fromHex('#cceeff')],
        minmaxBlue: [Color.fromHex('#114488'), Color.fromHex('#ccffee')],
        mostFrequentColor: Color.fromHex('#112244'),
        mostSaturatedColor: Color.fromHex('#002244'),
        mostGroupedColor: Color.fromHex('#001122'),
    },
} satisfies IImageColorStats;
