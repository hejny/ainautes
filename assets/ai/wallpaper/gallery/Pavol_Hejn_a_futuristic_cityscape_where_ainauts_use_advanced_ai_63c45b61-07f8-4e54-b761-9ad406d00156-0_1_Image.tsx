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
import metadata from './Pavol_Hejn_a_futuristic_cityscape_where_ainauts_use_advanced_ai_63c45b61-07f8-4e54-b761-9ad406d00156-0_1.json';
import source from './Pavol_Hejn_a_futuristic_cityscape_where_ainauts_use_advanced_ai_63c45b61-07f8-4e54-b761-9ad406d00156-0_1.png';

/**
 * Image of A futuristic cityscape where AInauts use advanced AI technology to monitor and maintain the city's infrastructure and systems.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AFuturisticCityscapeWhereAinautsUseAdvancedAi63c45b6107f84e54B7619ad406d001560_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A futuristic cityscape where AInauts use advanced AI technology to monitor and maintain the city's infrastructure and systems."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AFuturisticCityscapeWhereAinautsUseAdvancedAi63c45b6107f84e54B7619ad406d001560_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AFuturisticCityscapeWhereAinautsUseAdvancedAi63c45b6107f84e54B7619ad406d001560_1_Image.colorStats = {
    averageColor: Color.fromHex('#464858'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#cc2200'), Color.fromHex('#55ffff')],
    minmaxGreen: [Color.fromHex('#229988'), Color.fromHex('#ff3322')],
    minmaxBlue: [Color.fromHex('#2255bb'), Color.fromHex('#ffffdd')],
    mostFrequentColor: Color.fromHex('#222233'),
    mostSaturatedColor: Color.fromHex('#110000'),
    mostGroupedColor: Color.fromHex('#111122'),
    bottom: {
        averageColor: Color.fromHex('#4b3d49'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#001100'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000011')],
        minmaxRed: [Color.fromHex('#cc2200'), Color.fromHex('#aaffff')],
        minmaxGreen: [Color.fromHex('#228899'), Color.fromHex('#ff3322')],
        minmaxBlue: [Color.fromHex('#2255bb'), Color.fromHex('#ffffdd')],
        mostFrequentColor: Color.fromHex('#222233'),
        mostSaturatedColor: Color.fromHex('#001122'),
        mostGroupedColor: Color.fromHex('#221122'),
    },
} satisfies IImageColorStats;