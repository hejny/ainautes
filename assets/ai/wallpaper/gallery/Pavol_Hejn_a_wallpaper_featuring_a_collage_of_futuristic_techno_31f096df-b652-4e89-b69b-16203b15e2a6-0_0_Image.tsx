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
import metadata from './Pavol_Hejn_a_wallpaper_featuring_a_collage_of_futuristic_techno_31f096df-b652-4e89-b69b-16203b15e2a6-0_0.json';
import source from './Pavol_Hejn_a_wallpaper_featuring_a_collage_of_futuristic_techno_31f096df-b652-4e89-b69b-16203b15e2a6-0_0.png';

/**
 * Image of A wallpaper featuring a collage of futuristic technology such as drones, robots, and smart devices, set against a black background.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingACollageOfFuturisticTechno31f096dfB6524e89B69b16203b15e2a60_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring a collage of futuristic technology such as drones, robots, and smart devices, set against a black background."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingACollageOfFuturisticTechno31f096dfB6524e89B69b16203b15e2a60_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingACollageOfFuturisticTechno31f096dfB6524e89B69b16203b15e2a60_0_Image.colorStats = {
    averageColor: Color.fromHex('#10191a'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd2200'), Color.fromHex('#22eecc')],
    minmaxGreen: [Color.fromHex('#228855'), Color.fromHex('#aa0000')],
    minmaxBlue: [Color.fromHex('#116688'), Color.fromHex('#ffff77')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#0d1415'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#cc1111'), Color.fromHex('#ffffff')],
        minmaxGreen: [Color.fromHex('#449977'), Color.fromHex('#cc1111')],
        minmaxBlue: [Color.fromHex('#113355'), Color.fromHex('#ffffbb')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;