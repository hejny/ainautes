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
import metadata from './Pavol_Hejn_a_photograph_of_the_northern_lights_with_the_green_a_5a41273d-2d95-4ce3-b35b-147b130703eb-0_2.json';
import source from './Pavol_Hejn_a_photograph_of_the_northern_lights_with_the_green_a_5a41273d-2d95-4ce3-b35b-147b130703eb-0_2.png';

/**
 * Image of A photograph of the Northern Lights, with the green and purple hues swirling in the night sky.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function APhotographOfTheNorthernLightsWithTheGreenA5a41273d2d954ce3B35b147b130703eb0_2_Image(
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

APhotographOfTheNorthernLightsWithTheGreenA5a41273d2d954ce3B35b147b130703eb0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfTheNorthernLightsWithTheGreenA5a41273d2d954ce3B35b147b130703eb0_2_Image.colorStats = {
    averageColor: Color.fromHex('#323f33'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#662244'), Color.fromHex('#bbffff')],
    minmaxGreen: [Color.fromHex('#33aa22'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#335599'), Color.fromHex('#ffffff')],
    mostFrequentColor: Color.fromHex('#112222'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#222233'),
    bottom: {
        averageColor: Color.fromHex('#1c2e1e'),
        lightestColor: Color.fromHex('#ccddcc'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ccddcc'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#443333'), Color.fromHex('#ddff99')],
        minmaxGreen: [Color.fromHex('#33aa22'), Color.fromHex('#110011')],
        minmaxBlue: [Color.fromHex('#444455'), Color.fromHex('#ddff99')],
        mostFrequentColor: Color.fromHex('#112222'),
        mostSaturatedColor: Color.fromHex('#001111'),
        mostGroupedColor: Color.fromHex('#223333'),
    },
} satisfies IImageColorStats;