<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\PermissionResource;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class PermissionsController extends Controller
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
        $permissions = QueryBuilder::for(Permission::class) 
                ->allowedFilters([
                    'name',
                    AllowedFilter::exact('id'),
                ])
                ->allowedIncludes(['permissions'])
                ->defaultSort('id')
                ->get();
        

        return PermissionResource::collection($permissions);
    }

    /**
     * Display the specified resource.
     *
     * @param  Spatie\Permission\Models\Permission  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Permission $permission)
    {
        return new PermissionResource($permission);
    }

}
