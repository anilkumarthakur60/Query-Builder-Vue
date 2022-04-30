<?php

namespace App\Http\Resources;

use App\Http\Resources\PermissionResource;
use App\Http\Resources\UserResource;
use Illuminate\Http\Resources\Json\JsonResource;

class RoleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $this->loadCount('users');

        return [
            'id' => $this->id,
            'name' => $this->name,
            'permissions' => PermissionResource::collection($this->whenLoaded('permissions')),
            'users_count'=> $this->users_count,
            'users'=> UserResource::collection($this->whenLoaded('users')),
        ];
    }
}
