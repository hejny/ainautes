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
import metadata from './Pavol_Hejn_an_abstract_illustration_of_a_virtual_reality_enviro_a9950219-70f7-4f2d-a2b8-ff2366c5d796-0_2.json';
import source from './Pavol_Hejn_an_abstract_illustration_of_a_virtual_reality_enviro_a9950219-70f7-4f2d-a2b8-ff2366c5d796-0_2.png';

/**
 * Image of An abstract illustration of a virtual reality environment, with futuristic graphics and a minimalist color scheme.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AnAbstractIllustrationOfAVirtualRealityEnviroA995021970f74f2dA2b8Ff2366c5d7960_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract illustration of a virtual reality environment, with futuristic graphics and a minimalist color scheme."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractIllustrationOfAVirtualRealityEnviroA995021970f74f2dA2b8Ff2366c5d7960_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractIllustrationOfAVirtualRealityEnviroA995021970f74f2dA2b8Ff2366c5d7960_2_Image.colorStats = {
    averageColor: Color.fromHex('#222b2c'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#bb4422'), Color.fromHex('#33eeee')],
    minmaxGreen: [Color.fromHex('#119988'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#225588'), Color.fromHex('#ffffbb')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#412f27'),
        lightestColor: Color.fromHex('#ffffee'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb4422'), Color.fromHex('#eeffee')],
        minmaxGreen: [Color.fromHex('#33aa99'), Color.fromHex('#ffffee')],
        minmaxBlue: [Color.fromHex('#006688'), Color.fromHex('#ffffbb')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#110000'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;