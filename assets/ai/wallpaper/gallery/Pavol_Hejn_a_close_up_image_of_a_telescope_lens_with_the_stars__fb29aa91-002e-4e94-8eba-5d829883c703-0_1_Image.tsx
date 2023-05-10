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
import metadata from './Pavol_Hejn_a_close_up_image_of_a_telescope_lens_with_the_stars__fb29aa91-002e-4e94-8eba-5d829883c703-0_1.json';
import source from './Pavol_Hejn_a_close_up_image_of_a_telescope_lens_with_the_stars__fb29aa91-002e-4e94-8eba-5d829883c703-0_1.png';

/**
 * Image of A close-up image of a telescope lens, with the stars and planets visible in the reflection.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ACloseUpImageOfATelescopeLensWithTheStarsFb29aa91002e4e948eba5d829883c7030_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A close-up image of a telescope lens, with the stars and planets visible in the reflection."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACloseUpImageOfATelescopeLensWithTheStarsFb29aa91002e4e948eba5d829883c7030_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ACloseUpImageOfATelescopeLensWithTheStarsFb29aa91002e4e948eba5d829883c7030_1_Image.colorStats = {
    averageColor: Color.fromHex('#121519'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#664422'), Color.fromHex('#33ddff')],
    minmaxGreen: [Color.fromHex('#77aa77'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#0044bb'), Color.fromHex('#ffffbb')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#111317'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#664422'), Color.fromHex('#66eeff')],
        minmaxGreen: [Color.fromHex('#557744'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#004499'), Color.fromHex('#ffffbb')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;