<?php

namespace App\Http\Resources;

use App\Http\Resources\PermissionResource;
use App\Http\Resources\RoleResource;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {

        return [
            'id' => $this->id,
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'email' => $this->email,
            'email_verified_at' => $this->email_verified_at,
            'avatar' => str_replace(':seed', $this->id, $this->getFirstMediaUrl('avatar', 'square')),
            'roles' => RoleResource::collection($this->whenLoaded('roles')),
            'permissions' => PermissionResource::collection($this->whenLoaded('permissions')),
            'updated_at' => $this->updated_at,
            'created_at' => $this->created_at,
            'blocked_at' => $this->blocked_at,
            'deleted_at' => $this->deleted_at,

        ];
    }
}
