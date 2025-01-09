<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->enum('type', ['Business', 'Individual'])->default('Individual'); // Customer Type
            $table->string('salutation')->nullable(); // Salutation
            $table->string('first_name'); // First Name
            $table->string('last_name'); // Last Name
            $table->string('company_name')->nullable(); // Company Name
            $table->string('display_name')->nullable(); // Display Name
            $table->string('email')->unique(); // Email Address
            $table->string('phone')->nullable(); // Phone
            $table->string('work_phone')->nullable(); // Work Phone
            $table->string('mobile')->nullable(); // Mobile
            $table->text('address')->nullable(); // Address
            $table->text('contact_persons')->nullable(); // Contact Persons (JSON or serialized array)
            $table->text('custom_fields')->nullable(); // Custom Fields (JSON or serialized array)
            $table->text('reporting_tags')->nullable(); // Reporting Tags (JSON or serialized array)
            $table->text('remarks')->nullable(); // Remarks
            $table->string('gst_treatment')->nullable(); // GST Treatment
            $table->string('place_of_supply')->nullable(); // Place Of Supply
            $table->string('pan')->nullable(); // PAN
            $table->enum('tax_preference', ['Taxable', 'Tax Exempt'])->default('Taxable'); // Tax Preference
            $table->string('currency')->default('INR'); // Currency
            $table->decimal('opening_balance', 15, 2)->default(0.00); // Opening Balance
            $table->boolean('portal_access')->default(false); // Enable Portal
            $table->string('portal_language')->nullable(); // Portal Language
            $table->string('website_url')->nullable(); // Website URL
            $table->string('department')->nullable(); // Department
            $table->string('designation')->nullable(); // Designation
            $table->string('twitter')->nullable(); // Twitter
            $table->string('skype')->nullable(); // Skype Name/Number
            $table->string('facebook')->nullable(); // Facebook
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customers');
    }
}
