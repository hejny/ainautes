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
import metadata from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_an_717174f5-dc73-4323-9e56-7d185e88586c-0_2.json';
import source from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_an_717174f5-dc73-4323-9e56-7d185e88586c-0_2.png';

/**
 * Image of A wallpaper featuring an abstract illustration of an AI-powered search engine, with a minimalist and modern design, set against a gradient background.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAnAbstractIllustrationOfAn717174f5Dc7343239e567d185e88586c0_2_Image(
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

AWallpaperFeaturingAnAbstractIllustrationOfAn717174f5Dc7343239e567d185e88586c0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAnAbstractIllustrationOfAn717174f5Dc7343239e567d185e88586c0_2_Image.colorStats = {
    averageColor: Color.fromHex('#856aaf'),
    lightestColor: Color.fromHex('#ffaaff'),
    darkestColor: Color.fromHex('#110022'),
    minmaxWhite: [Color.fromHex('#ffbbff'), Color.fromHex('#000033')],
    minmaxRed: [Color.fromHex('#ff4444'), Color.fromHex('#22ddff')],
    minmaxGreen: [Color.fromHex('#119999'), Color.fromHex('#aa22ee')],
    minmaxBlue: [Color.fromHex('#3322cc'), Color.fromHex('#ffdd99')],
    mostFrequentColor: Color.fromHex('#662299'),
    mostSaturatedColor: Color.fromHex('#0088cc'),
    mostGroupedColor: Color.fromHex('#1177bb'),
    bottom: {
        averageColor: Color.fromHex('#3f6bc5'),
        lightestColor: Color.fromHex('#ffaaff'),
        darkestColor: Color.fromHex('#110022'),
        minmaxWhite: [Color.fromHex('#ffaaff'), Color.fromHex('#000033')],
        minmaxRed: [Color.fromHex('#ee4444'), Color.fromHex('#11ccee')],
        minmaxGreen: [Color.fromHex('#119999'), Color.fromHex('#aa22ee')],
        minmaxBlue: [Color.fromHex('#3322cc'), Color.fromHex('#ffaaee')],
        mostFrequentColor: Color.fromHex('#662299'),
        mostSaturatedColor: Color.fromHex('#0088cc'),
        mostGroupedColor: Color.fromHex('#11aacc'),
    },
} satisfies IImageColorStats;