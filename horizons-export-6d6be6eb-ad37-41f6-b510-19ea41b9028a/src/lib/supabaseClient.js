import { createClient } from '@supabase/supabase-js';

    const supabaseUrl = 'https://abgmcceggwkoxavzkozv.supabase.co';
    const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiZ21jY2VnZ3drb3hhdnprb3p2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2OTAzMjYsImV4cCI6MjA2MjI2NjMyNn0.tNlYW3bVeEqADIAnefVqFa11CR2c2AB5DKPdXYAD8m4';

    export const supabase = createClient(supabaseUrl, supabaseAnonKey);