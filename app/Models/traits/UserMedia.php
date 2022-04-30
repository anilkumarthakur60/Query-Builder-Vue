<?php

namespace App\Models\Traits;

use Illuminate\Support\Str;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

trait UserMedia
{
    use InteractsWithMedia;

    public function registerMediaCollections(): void
    {

        $this->addMediaCollection('avatar')
            ->acceptsMimeTypes(['image/jpeg', 'image/png'])
            ->withResponsiveImages()
            ->singleFile()
            ->useFallbackUrl("https://avatars.dicebear.com/api/human/:seed.svg")
            ->registerMediaConversions(function (Media $media) {
                $this
                    ->addMediaConversion('square')
                    ->width(256)
                    ->height(256);
            });
    }

}
