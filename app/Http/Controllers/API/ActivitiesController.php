<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\ActivityResource;
use App\Models\Activity;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class ActivitiesController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware(['role:admin|god']);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $activities = QueryBuilder::for(Activity::class)
                ->allowedFilters([
                    'log_name',
                    'description',
                    AllowedFilter::exact('id'),
                ])
                ->defaultSort('-created_at')
                ->allowedSorts(
                    'id',
                    'log_name',
                    'description',
                    'created_at'
                )
                ->paginate(15);

        return ActivityResource::collection($activities);
    }

    /**
     * Display the specified resource.
     *
     * @param  \Spatie\Activitylog\Models\Activity  $activity
     * @return \Illuminate\Http\Response
     */
    public function show(Activity $activity)
    {
        return new ActivityResource($activity);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Spatie\Activitylog\Models\Activity  $activity
     * @return \Illuminate\Http\Response
     */
    public function destroy(Activity $activity)
    {
        $activity->delete();
        return new ActivityResource($activity);
    }
}
