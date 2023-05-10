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
import metadata from './Pavol_Hejn_an_abstract_image_of_a_swirling_galaxy_with_bright_c_4618b360-6ec1-43c2-9c2d-cd640c314b5f-0_3.json';
import source from './Pavol_Hejn_an_abstract_image_of_a_swirling_galaxy_with_bright_c_4618b360-6ec1-43c2-9c2d-cd640c314b5f-0_3.png';

/**
 * Image of An abstract image of a swirling galaxy, with bright colors and intricate patterns.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AnAbstractImageOfASwirlingGalaxyWithBrightC4618b3606ec143c29c2dCd640c314b5f0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract image of a swirling galaxy, with bright colors and intricate patterns."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractImageOfASwirlingGalaxyWithBrightC4618b3606ec143c29c2dCd640c314b5f0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractImageOfASwirlingGalaxyWithBrightC4618b3606ec143c29c2dCd640c314b5f0_3_Image.colorStats = {
    averageColor: Color.fromHex('#60493b'),
    lightestColor: Color.fromHex('#eeeeee'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#eeffee'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd2200'), Color.fromHex('#eeffee')],
    minmaxGreen: [Color.fromHex('#558855'), Color.fromHex('#cc1100')],
    minmaxBlue: [Color.fromHex('#115588'), Color.fromHex('#ffeeaa')],
    mostFrequentColor: Color.fromHex('#882211'),
    mostSaturatedColor: Color.fromHex('#002222'),
    mostGroupedColor: Color.fromHex('#111111'),
    bottom: {
        averageColor: Color.fromHex('#574336'),
        lightestColor: Color.fromHex('#eeeeee'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#eeffee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#dd2200'), Color.fromHex('#eeffee')],
        minmaxGreen: [Color.fromHex('#779955'), Color.fromHex('#cc1100')],
        minmaxBlue: [Color.fromHex('#114477'), Color.fromHex('#ffeeaa')],
        mostFrequentColor: Color.fromHex('#882211'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;