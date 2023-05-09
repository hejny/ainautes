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
import metadata from './Pavol_Hejn_sunrise_on_a_distant_planet_1dbf75d0-2408-4d4c-818a-14c1fca69136-0_0.json';
import source from './Pavol_Hejn_sunrise_on_a_distant_planet_1dbf75d0-2408-4d4c-818a-14c1fca69136-0_0.png';

/**
 * Image of Sunrise on a distant planet
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function SunriseOnADistantPlanet1dbf75d024084d4c818a14c1fca691360_0_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="Sunrise on a distant planet"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

SunriseOnADistantPlanet1dbf75d024084d4c818a14c1fca691360_0_Image.metadata = metadata satisfies IWallpaperMetadata;
SunriseOnADistantPlanet1dbf75d024084d4c818a14c1fca691360_0_Image.colorStats = {
    averageColor: Color.fromHex('#41282c'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd3322'), Color.fromHex('#ffffff')],
    minmaxGreen: [Color.fromHex('#667777'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#334466'), Color.fromHex('#ffffaa')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#110011'),
    mostGroupedColor: Color.fromHex('#222233'),
    bottom: {
        averageColor: Color.fromHex('#240c13'),
        lightestColor: Color.fromHex('#ffffee'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#dd3322'), Color.fromHex('#eeffee')],
        minmaxGreen: [Color.fromHex('#775544'), Color.fromHex('#990000')],
        minmaxBlue: [Color.fromHex('#332233'), Color.fromHex('#ffffaa')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#110011'),
        mostGroupedColor: Color.fromHex('#221122'),
    },
} satisfies IImageColorStats;
