<?php

namespace App\Models\Traits\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Carbon;

trait UserScope
{
    /**
     * Scope a query to only include created_before users
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeCreatedBefore(Builder $query, $date): Builder
    {
        return $query->where('created_at', '<=', Carbon::parse($date));
    }

    public function scopeCreatedAfter(Builder $query, $date): Builder
    {
        return $query->where('created_at', '>=', Carbon::parse($date));
    }

    public function scopeBlocked(Builder $query, $withOrOnly): Builder
    {
        if($withOrOnly == 'only'){
            return $query->where('blocked_at', '!=' , null);
        }else if($withOrOnly == 'with'){
            return $query;
        }

        return $query;
        
    }
}
