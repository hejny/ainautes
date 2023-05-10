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
import metadata from './Pavol_Hejn_a_dreamy_forest_scene_with_fairies_380486d5-af02-4d6b-ae31-e4f04a6c3580-0_0.json';
import source from './Pavol_Hejn_a_dreamy_forest_scene_with_fairies_380486d5-af02-4d6b-ae31-e4f04a6c3580-0_0.png';

/**
 * Image of A dreamy forest scene with fairies
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ADreamyForestSceneWithFairies380486d5Af024d6bAe31E4f04a6c35800_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A dreamy forest scene with fairies"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADreamyForestSceneWithFairies380486d5Af024d6bAe31E4f04a6c35800_0_Image.metadata = metadata satisfies IWallpaperMetadata;
ADreamyForestSceneWithFairies380486d5Af024d6bAe31E4f04a6c35800_0_Image.colorStats = {
    averageColor: Color.fromHex('#585139'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#cc2200'), Color.fromHex('#ffffff')],
    minmaxGreen: [Color.fromHex('#778833'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#554466'), Color.fromHex('#ffaa00')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#111100'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#3a351c'),
        lightestColor: Color.fromHex('#ffffee'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb3311'), Color.fromHex('#ffffee')],
        minmaxGreen: [Color.fromHex('#778833'), Color.fromHex('#ffeeee')],
        minmaxBlue: [Color.fromHex('#333344'), Color.fromHex('#ffffbb')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#111100'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;