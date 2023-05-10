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
import metadata from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_an_8c6be2ea-c68f-4d2b-b80c-84f624039d7e-0_1.json';
import source from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_an_8c6be2ea-c68f-4d2b-b80c-84f624039d7e-0_1.png';

/**
 * Image of A wallpaper featuring an abstract illustration of an AI-powered search engine, with a minimalist and modern design.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAnAbstractIllustrationOfAn8c6be2eaC68f4d2bB80c84f624039d7e0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring an abstract illustration of an AI-powered search engine, with a minimalist and modern design."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingAnAbstractIllustrationOfAn8c6be2eaC68f4d2bB80c84f624039d7e0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAnAbstractIllustrationOfAn8c6be2eaC68f4d2bB80c84f624039d7e0_1_Image.colorStats = {
    averageColor: Color.fromHex('#b99388'),
    lightestColor: Color.fromHex('#ffeeff'),
    darkestColor: Color.fromHex('#000011'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000011')],
    minmaxRed: [Color.fromHex('#ff1111'), Color.fromHex('#00dddd')],
    minmaxGreen: [Color.fromHex('#66bb77'), Color.fromHex('#ff1133')],
    minmaxBlue: [Color.fromHex('#0022aa'), Color.fromHex('#ffffdd')],
    mostFrequentColor: Color.fromHex('#003366'),
    mostSaturatedColor: Color.fromHex('#006688'),
    mostGroupedColor: Color.fromHex('#ffddcc'),
    bottom: {
        averageColor: Color.fromHex('#a0776e'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000011'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000011')],
        minmaxRed: [Color.fromHex('#ee1122'), Color.fromHex('#00dddd')],
        minmaxGreen: [Color.fromHex('#22aa88'), Color.fromHex('#ee1133')],
        minmaxBlue: [Color.fromHex('#002299'), Color.fromHex('#ffffdd')],
        mostFrequentColor: Color.fromHex('#003366'),
        mostSaturatedColor: Color.fromHex('#004477'),
        mostGroupedColor: Color.fromHex('#ee7755'),
    },
} satisfies IImageColorStats;