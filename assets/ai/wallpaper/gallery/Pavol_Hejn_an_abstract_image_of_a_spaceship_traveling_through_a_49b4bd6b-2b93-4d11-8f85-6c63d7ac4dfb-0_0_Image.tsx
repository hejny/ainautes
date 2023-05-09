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
import metadata from './Pavol_Hejn_an_abstract_image_of_a_spaceship_traveling_through_a_49b4bd6b-2b93-4d11-8f85-6c63d7ac4dfb-0_0.json';
import source from './Pavol_Hejn_an_abstract_image_of_a_spaceship_traveling_through_a_49b4bd6b-2b93-4d11-8f85-6c63d7ac4dfb-0_0.png';

/**
 * Image of An abstract image of a spaceship traveling through a wormhole, with bright colors and surreal patterns.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AnAbstractImageOfASpaceshipTravelingThroughA49b4bd6b2b934d118f856c63d7ac4dfb0_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract image of a spaceship traveling through a wormhole, with bright colors and surreal patterns."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractImageOfASpaceshipTravelingThroughA49b4bd6b2b934d118f856c63d7ac4dfb0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractImageOfASpaceshipTravelingThroughA49b4bd6b2b934d118f856c63d7ac4dfb0_0_Image.colorStats = {
    averageColor: Color.fromHex('#64413c'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ee0022'), Color.fromHex('#11ffff')],
    minmaxGreen: [Color.fromHex('#33bb66'), Color.fromHex('#ee00bb')],
    minmaxBlue: [Color.fromHex('#0033bb'), Color.fromHex('#ffee22')],
    mostFrequentColor: Color.fromHex('#882211'),
    mostSaturatedColor: Color.fromHex('#000022'),
    mostGroupedColor: Color.fromHex('#001122'),
    bottom: {
        averageColor: Color.fromHex('#845847'),
        lightestColor: Color.fromHex('#ffeeee'),
        darkestColor: Color.fromHex('#001100'),
        minmaxWhite: [Color.fromHex('#ffeeee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#ee1122'), Color.fromHex('#11ffff')],
        minmaxGreen: [Color.fromHex('#11bb88'), Color.fromHex('#ee00bb')],
        minmaxBlue: [Color.fromHex('#0033bb'), Color.fromHex('#ffee22')],
        mostFrequentColor: Color.fromHex('#882211'),
        mostSaturatedColor: Color.fromHex('#002255'),
        mostGroupedColor: Color.fromHex('#111133'),
    },
} satisfies IImageColorStats;
