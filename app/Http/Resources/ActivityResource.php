<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ActivityResource extends JsonResource
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
            'log_name' => $this->log_name,
            'description' => $this->description,
            'subject_id' => $this->subject_id,
            'subject_type' => $this->subject_type,
            'created_at' => $this->created_at,
            'causer_id' => $this->subject_id,
            'causer_type' => $this->subject_type,
            'user' => $this->when($this->causer_type === 'App\Models\User', new UserResource($this->causer)),
        ];
    }
}
