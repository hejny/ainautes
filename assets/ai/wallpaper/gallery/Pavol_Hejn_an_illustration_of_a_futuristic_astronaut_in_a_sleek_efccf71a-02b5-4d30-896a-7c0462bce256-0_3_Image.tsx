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
import metadata from './Pavol_Hejn_an_illustration_of_a_futuristic_astronaut_in_a_sleek_efccf71a-02b5-4d30-896a-7c0462bce256-0_3.json';
import source from './Pavol_Hejn_an_illustration_of_a_futuristic_astronaut_in_a_sleek_efccf71a-02b5-4d30-896a-7c0462bce256-0_3.png';

/**
 * Image of An illustration of a futuristic astronaut in a sleek spacesuit, standing on the surface of a distant planet.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AnIllustrationOfAFuturisticAstronautInASleekEfccf71a02b54d30896a7c0462bce2560_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An illustration of a futuristic astronaut in a sleek spacesuit, standing on the surface of a distant planet."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnIllustrationOfAFuturisticAstronautInASleekEfccf71a02b54d30896a7c0462bce2560_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnIllustrationOfAFuturisticAstronautInASleekEfccf71a02b54d30896a7c0462bce2560_3_Image.colorStats = {
    averageColor: Color.fromHex('#52595f'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#cc3322'), Color.fromHex('#aaffff')],
    minmaxGreen: [Color.fromHex('#668855'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#114488'), Color.fromHex('#ffffaa')],
    mostFrequentColor: Color.fromHex('#111111'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#223344'),
    bottom: {
        averageColor: Color.fromHex('#384852'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#aa2222'), Color.fromHex('#ccffff')],
        minmaxGreen: [Color.fromHex('#559988'), Color.fromHex('#ffeeff')],
        minmaxBlue: [Color.fromHex('#114488'), Color.fromHex('#ffffdd')],
        mostFrequentColor: Color.fromHex('#111111'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#335566'),
    },
} satisfies IImageColorStats;
