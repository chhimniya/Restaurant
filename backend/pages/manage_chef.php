<?php
    include 'conn.php';
    include 'header.php';
    include 'sidebar.php';
    $message_delete="";
    if (isset($_REQUEST['chef_del_id'])) {
        echo $chef_del_id=$_REQUEST['chef_del_id'];
        $del_img=$conn->query("SELECT chef_image FROM chef WHERE chef_id='".$_REQUEST['chef_del_id']."'")->fetch_assoc();
        unlink("images/chefs/".$del_img['chef_image']);
        $chef_delete="DELETE FROM chef WHERE chef_id=$chef_del_id";
        if ($conn->query($chef_delete)===TRUE) {
            $message_delete='<div class="alert alert-success alert-dismissible fade show ">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
        <strong><i class="fa fa-check-circle"></i></strong>Your data  has been deleted</div>';
            }
            else {
                $message_delete='<div class="alert alert-danger alert-dismissible fade show" >
            <button type="button" class="close" data-dismiss="alert">&times;</button>
        <strong><i class="fa fa-times"></i></strong>Your data  has not been deleted</div>';
            }       
    }
?>
<main class="app-content">
      <div class="app-title">
        <div>
          <h1><i class="fa fa-dashboard"></i> Manage Chef</h1>
        </div>
      </div>
      <div class="tile">
      <?php
        echo $message_delete;
      ?>
            <div class="tile-body">
              <div class="table-responsive">
                <table class="table table-hover table-bordered" id="sampleTable">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Photos</th>
                      <th>Position</th>
                      <th>Gmail</th>
                      <th>Detail</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <?php
                        $select_chef="SELECT*FROM chef";
                        $result=$conn->query($select_chef);
                        $i=1;
                        while ($row=$result->fetch_assoc()) {
                           echo' <tr>
                           <td>'.$i.'</td>
                           <td>'.$row['chef_name'].'</td>
                           <td class="text-center"><img  src="images/chefs/'.$row['chef_image'].'" class="img-thumbnail" width="60" height="60"></td>
                           <td>'.$row['chef_position'].'</td>
                           <td>'.$row['chef_gmail'].'</td>
                           <td>'.$row['chef_detail'].'</td>
                           <td>
                          <div class="btn-group">
                          <a href="add_chef.php?get_chef_id='.$row['chef_id'].'"  class="btn btn-success">Edit</a>
                          <button style="cursor:pointer;" class="btn btn-danger" data-href="manage_chef.php?chef_del_id='.$row['chef_id'].'" data-toggle="modal" data-target="#confirm-delete">Delete</button>
                          </div>
                      </td>
                         </tr> ';
                         $i++;
                        }
                    ?>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
<!-- The Modal -->
   <!--Modal Delet staff-->
        <div class="modal fade" id="confirm-delete" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
             <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header bg-success">
                Confirm
            </div>
            <div class="modal-body">
                Are you sure! You want to delete this brand
            </div>
            <div class="modal-footer">
                
                <a class="btn btn-success btn-ok">Delete</a>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
            </div>
        </div>
    </main>
    <?php
     include 'footer.php';