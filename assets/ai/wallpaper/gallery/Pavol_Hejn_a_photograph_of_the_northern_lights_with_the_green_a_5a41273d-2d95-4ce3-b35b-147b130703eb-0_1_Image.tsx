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
import metadata from './Pavol_Hejn_a_photograph_of_the_northern_lights_with_the_green_a_5a41273d-2d95-4ce3-b35b-147b130703eb-0_1.json';
import source from './Pavol_Hejn_a_photograph_of_the_northern_lights_with_the_green_a_5a41273d-2d95-4ce3-b35b-147b130703eb-0_1.png';

/**
 * Image of A photograph of the Northern Lights, with the green and purple hues swirling in the night sky.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function APhotographOfTheNorthernLightsWithTheGreenA5a41273d2d954ce3B35b147b130703eb0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photograph of the Northern Lights, with the green and purple hues swirling in the night sky."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APhotographOfTheNorthernLightsWithTheGreenA5a41273d2d954ce3B35b147b130703eb0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfTheNorthernLightsWithTheGreenA5a41273d2d954ce3B35b147b130703eb0_1_Image.colorStats = {
    averageColor: Color.fromHex('#233a3f'),
    lightestColor: Color.fromHex('#eeffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#eeffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#442244'), Color.fromHex('#aaffff')],
    minmaxGreen: [Color.fromHex('#44bb55'), Color.fromHex('#eeffff')],
    minmaxBlue: [Color.fromHex('#445588'), Color.fromHex('#eeffff')],
    mostFrequentColor: Color.fromHex('#001111'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#111122'),
    bottom: {
        averageColor: Color.fromHex('#172e2d'),
        lightestColor: Color.fromHex('#cceeff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#cceeff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#332222'), Color.fromHex('#bbffee')],
        minmaxGreen: [Color.fromHex('#44bb55'), Color.fromHex('#cceeff')],
        minmaxBlue: [Color.fromHex('#445577'), Color.fromHex('#bbffcc')],
        mostFrequentColor: Color.fromHex('#001111'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#113333'),
    },
} satisfies IImageColorStats;