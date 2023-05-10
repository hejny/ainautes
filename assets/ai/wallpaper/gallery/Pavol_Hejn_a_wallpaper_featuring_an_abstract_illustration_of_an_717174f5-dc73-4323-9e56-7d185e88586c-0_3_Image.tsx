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
import metadata from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_an_717174f5-dc73-4323-9e56-7d185e88586c-0_3.json';
import source from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_an_717174f5-dc73-4323-9e56-7d185e88586c-0_3.png';

/**
 * Image of A wallpaper featuring an abstract illustration of an AI-powered search engine, with a minimalist and modern design, set against a gradient background.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAnAbstractIllustrationOfAn717174f5Dc7343239e567d185e88586c0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring an abstract illustration of an AI-powered search engine, with a minimalist and modern design, set against a gradient background."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingAnAbstractIllustrationOfAn717174f5Dc7343239e567d185e88586c0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAnAbstractIllustrationOfAn717174f5Dc7343239e567d185e88586c0_3_Image.colorStats = {
    averageColor: Color.fromHex('#5e4a9b'),
    lightestColor: Color.fromHex('#ff99ff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#662233'), Color.fromHex('#bbffff')],
    minmaxGreen: [Color.fromHex('#44ccaa'), Color.fromHex('#dd55ff')],
    minmaxBlue: [Color.fromHex('#2233dd'), Color.fromHex('#ffffee')],
    mostFrequentColor: Color.fromHex('#111133'),
    mostSaturatedColor: Color.fromHex('#001122'),
    mostGroupedColor: Color.fromHex('#112244'),
    bottom: {
        averageColor: Color.fromHex('#3b3978'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000011'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000011')],
        minmaxRed: [Color.fromHex('#994488'), Color.fromHex('#ccffff')],
        minmaxGreen: [Color.fromHex('#55aa99'), Color.fromHex('#6633ff')],
        minmaxBlue: [Color.fromHex('#2233dd'), Color.fromHex('#ffffee')],
        mostFrequentColor: Color.fromHex('#111133'),
        mostSaturatedColor: Color.fromHex('#001122'),
        mostGroupedColor: Color.fromHex('#112233'),
    },
} satisfies IImageColorStats;