<?php

namespace App\Models;

use App\Models\Traits\Scopes\UserScope;
use App\Models\Traits\UserMedia;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\MediaLibrary\HasMedia;
use Spatie\Permission\Traits\HasRoles;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class User extends Authenticatable implements HasMedia
{
    use Notifiable, HasRoles, HasFactory, SoftDeletes,  UserScope, UserMedia;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
        'blocked_at',
        'blocked_for',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'blocked_at' => 'datetime',
    ];

    /**
     * Log activuty
     */
    protected static $logName = 'users';
    protected static $recordEvents = ['deleted', 'created', 'restored'];

    /**
     * Get the user's full name.
     *
     * @return string
     */
    public function getFullNameAttribute()
    {
        return "{$this->first_name} {$this->last_name}";
    }

    public function isBlocked()
    {
        return $this->blocked_at != null;
    }

    /**
     * Block the user for $duration days or forever
     */
    public function block($duration = null)
    {
        $this->update([
            'blocked_at' => now(),
            'blocked_for' => $duration,
        ]);
    }

    /**
     * Unblock a user
     */
    public function unblock()
    {
        $this->update([
            'blocked_at' => null,
            'blocked_for' => null,
        ]);
    }
}
